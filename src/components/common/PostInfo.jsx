import React from "react";
import { currency } from "../../utils/currency";

const PostInfo = ({ post }) => {
  const {
    title,
    acreage,
    bedroom,
    bathroom,
    countPerson,
    phone,
    deposit,
    wifi,
    advertisement,
    timeAdvertisement,
    waterPrice,
    electricityPrice,
    messageRoom,
    nameCategory,
    describe,
    viewsCount,
  } = post;
  const renderAddress = (post) => {
    const { address, street, wards, district, cty } = post;
    return (
      address + ", " + street + ", " + wards + ", " + district + ", " + cty
    );
  };
  return (
    <>
      <p>
        Tiêu đề: <span>{title}</span>
      </p>
      <p>
        Địa chỉ: <span>{renderAddress(post)}</span>
      </p>
      <p>
        Diện tích:
        <span>
          {acreage}m<sup>2</sup>
        </span>
      </p>
      <p>
        Phòng ngủ: <span>{bedroom}</span>
      </p>
      <p>
        Phòng tắm: <span>{bathroom}</span>
      </p>
      <p>
        Số người ở: <span>{countPerson}</span>
      </p>
      <p>
        Số điện thoại: <span>{phone}</span>
      </p>
      <p>
        Giá cọc: <span>{deposit}</span>
      </p>
      <p>
        Giá wifi: <span>{currency(wifi)} / 1 tháng</span>
      </p>
      {advertisement && timeAdvertisement > 0 && (
        <p>
          Số ngày quảng cáo: <span>{timeAdvertisement} ngày</span>
        </p>
      )}
      <p>
        Quảng cáo: <span>{advertisement ? "có" : "không"}</span>
      </p>
      <p>
        Giá bài viết: <span>{currency(post.priceAll)}</span>
      </p>
      <p>
        Giá nước:
        <span>
          {currency(waterPrice)} / m<sup>3</sup>
        </span>
      </p>
      <p>
        Giá điện: <span>{currency(electricityPrice)} / 1 số</span>
      </p>
      <p>
        Trạng thái: <span>{messageRoom}</span>
      </p>
      <p>
        Danh mục: <span>{nameCategory}</span>
      </p>
      <p>
        Nội dung bài viết: <span>{describe}</span>
      </p>
      <p>
        Lượt xem: <span>{viewsCount}</span>
      </p>
    </>
  );
};

export default PostInfo;
