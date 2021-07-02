import { ref } from "@vue/reactivity";
import axios from "axios";

const getData = (url) => {
  const data = ref(null);
  const loading = ref(null);
  const error = ref(null);
  const count = ref(0);

  const loadData = async () => {
    loading.value = true;
    count.value++;
    if (count.value <= 50) {
      try {
        const res = await axios.request(url);
        data.value = res.data;
      } catch (error) {
        error.value = error;
      } finally {
        loading.value = false;
      }
    }
  };
  return { data, getData, loading, error, count, loadData };
};

export default getData;
