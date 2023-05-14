import instance from "./instance";

class Cash {
  list(start, end) {
    return instance.get(
      `postAdmin/statistical/startDate=${start}&endDate=${end}`
    );
  }
}

export default new Cash();
