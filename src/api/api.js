const MY_TOKEN = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFlMTQ0NDc1MmI0NWYwNDE4NDRjYmFiODAyMmQ0NDhhZGRjODI5YjQ1MGE1NzkwMDExZWQwYjM3MjcwNTI5YTVmYzA1YTE3ZTc2ZjJiYTc2In0.eyJhdWQiOiIyOSIsImp0aSI6IjFlMTQ0NDc1MmI0NWYwNDE4NDRjYmFiODAyMmQ0NDhhZGRjODI5YjQ1MGE1NzkwMDExZWQwYjM3MjcwNTI5YTVmYzA1YTE3ZTc2ZjJiYTc2IiwiaWF0IjoxNTUxNzI1MzEwLCJuYmYiOjE1NTE3MjUzMTAsImV4cCI6MTU4MzM0NzcwOSwic3ViIjoiMSIsInNjb3BlcyI6W119.nCOLevBkX67-CO4mX6eLXJpuYal--4ZKI5umuzWsFfGybtcemA14awMV2wmvJTOVWY8RXXvzOnj7v91uB3PXLy1AyMZtuOZVXFtx1bt7XVum6MzlDLnJFgPxQ6JX7KW09Lr6yZk7EnJVtMKNPZ50O8a2eGvQCrvvtN4pxcgsSHksKLV3dDR7I4zaLiIvDEzgSzGAgijI9qv9lI8axqShaOwhDQn-0n1bTh8k-xFIoC0yTWlaNJ9rTYVHtewXDaPTeM-3Zyh-VTvtCxqLfgG3n-sQ2Mw1qIEbW3WDnAWXJzefr681NhOZh3K0V4sAon_YNeG6VVVNJh4lsBp3yJXHu4eiQNsC-8Y4iiNdv_ZZQn1wDf3O7IrjI0_4f1zQw_D9mC-TSZ80gu32mwGq41A9FggAUq4PnuP0ZEyLfW1cVkknZP3hXCjqoLOjteynJ07H2o6tYyoohwiwxt5YRyDuV-0DVsRfKnaWaBEKMFGdm96nHWKJ4iTpvdPl5WtgKNA-YULW6mp2XYArZJhCUedu7hR6ole2jX77vnNwyQoDxtGRTZpt2_LmNMwSlZA5GvKePjwBcJDfTxJayYHdc4pXUstX2a3nF29MzHPwBlFv-QSm-HgHEfcOI_YV53m_0DesTxiYmhcTUCqBRfKLvbvNOKsnsckGGaauMH2-3LGkXqA`;
// const urlPath = `/v1/shows/861/event_orders`;
const URL = `https://development-api.shepardes.com/v1/event_orders`;

export default {
  getShows() {
    return fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${MY_TOKEN}`,
      }
    });
  },
  updateShow(id, updateInfo) {
    const PATCH_URL = `https://development-api.shepardes.com/v1/event_orders/${id}`;
    return fetch(PATCH_URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${MY_TOKEN}`,
      },
      body: updateInfo,
    })
  },
}
