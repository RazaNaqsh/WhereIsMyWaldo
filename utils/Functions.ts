export const fetchData = async (name: string) => {
  try {
    const response = await fetch(`/api/char?${name}`);
    if (response.ok) {
      const res = await response.json();
      console.log("Retrieved data:", res.data);
      return res.data;
    } else {
      console.error("Error fetching data");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
