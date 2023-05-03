export const fetchPointData = async (coords: number[] | (number | [])[] | [][], pointName: string) => {
  return await fetch(
    `https://catalog.api.2gis.com/3.0/items/geocode?lon=${coords[0]}&lat=${coords[1]}&fields=items.point&key=demo`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { full_name } = data.result.items[0];
      localStorage.setItem(pointName, full_name.split(', ')[0]);
      return full_name;
    });
};
