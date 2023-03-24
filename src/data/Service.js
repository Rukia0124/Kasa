import data from "./data.json";

class DataService {
  getAllData() {
    return data;
  }

  getDataById(id) {
    return data.find((data) => data.id === id);
  }
}
const dataService = new DataService();

export default dataService;
