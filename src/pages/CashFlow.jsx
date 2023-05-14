import React, { useEffect, useState } from "react";
import { formatDate } from "../utils/date";
import { currency } from "../utils/currency";
import Cash from "../services/cash";

const CashFlow = () => {
  const [statistical, setStatistical] = useState([]);

  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  const defaultStartDate = formatDate(oneMonthAgo.getTime());
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(formatDate(Date.now()));

  const convertDate = (dateString) => {
    function convertToDateObject(dateString) {
      const [dd, mm, yyyy] = dateString.split("/");
      return +new Date(`${yyyy}-${mm}-${dd}`);
    }
    return +convertToDateObject(dateString);
  };

  const getCashFlow = async (timeStart, timeEnd) => {
    const { data } = await Cash.list(
      convertDate(timeStart),
      convertDate(timeEnd)
    );
    setStatistical(data);
  };

  const handleFilterCashFlow = () => {
    getCashFlow(startDate, endDate);
  };

  const calculateTotalPrice = (data) =>
    currency(data?.reduce((acc, curr) => acc + curr.price, 0));

  useEffect(() => {
    getCashFlow(startDate, endDate);
  }, []);

  return (
    <div className="col-12">
      <div className="bg-white rounded h-100 p-4">
        <h6 className="mb-4">Quản lý dòng tiền</h6>
        <span className="mx-2">Từ</span>
        <input
          type="date"
          value={formatDate(startDate)}
          onChange={({ target: { value } }) => setStartDate(value)}
        />
        <span className="mx-2">Đến</span>
        <input
          type="date"
          value={formatDate(endDate)}
          onChange={({ target: { value } }) => setEndDate(value)}
        />
        <button className="btn btn-success mx-2" onClick={handleFilterCashFlow}>
          Lọc
        </button>
        <h6 className="my-2">
          Tổng doanh thu: {calculateTotalPrice(statistical)}
        </h6>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Thời gian</th>
                <th scope="col">Khách hàng</th>
                <th scope="col">Nội dung thanh toán</th>
                <th scope="col">Số tiền</th>
                <th scope="col" style={{ whiteSpace: "nowrap" }}>
                  Trạng thái
                </th>
              </tr>
            </thead>
            <tbody>
              {statistical?.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="white-space-nowrap">{data.dateTime}</td>
                  <td>{data.title.replace("Khách Hàng Thanh Toán: ", "")}</td>
                  <td>{data.content}</td>
                  <td>{currency(data.price)}</td>
                  <td>{data.status ? "Thành công" : "Thất bại"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CashFlow;
