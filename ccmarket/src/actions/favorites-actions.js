// import $ from 'jquery';

export const TOGGLE_FAVORITE = "favorites:toggleFavorite";
export const ADD_FAVORITE = "favorites:addFavorite";
export const REMOVE_FAVORITE = "favorites:removeFavorite";
export const SHOW_ERROR = "favorites:showError";
export const SHOW_DATA = "favorites:showData";
export const SHOW_LOADING = "favorites:showLoading";



export function toggleFavorite() {
	return {
	  type: TOGGLE_FAVORITE,
	  payload: {
		 favorites: [1]
	  }
	};
 }


export function removeFavorite() {
	return {
	  type: REMOVE_FAVORITE,
	  payload: {
		 favorites: "REMOVE!"
	  }
	};
 }

export function addFavorite() {
	return {
	  type: ADD_FAVORITE,
	  payload: {
		 favorites: "ADD!"
	  }
	};
 }

export function showError() {
  return {
    type: SHOW_ERROR,
    payload: {
      favorites: "ERROR!"
    }
  };
}

export function showLoading() {
  // console.log('Show Loading');
  return {
    type: SHOW_LOADING,
    payload: {
      favorites: true
    }
  };
}

export function showData(data) {
  // console.log('Actions: ' + data);
  return {
    type: SHOW_DATA,
    payload: {
      favorites: data,
      loading: false
    }
  };
}

// export const apiNewsRequest = (query, dateline, newsapikey) => dispatch => {
//   var url =
//     "https://newsapi.org/v2/everything?" +
//     "q=" +
//     query +
//     "&" +
//     "from=" +
//     dateline +
//     "&" +
//     "sortBy=popularity&" +
//     "apiKey=" +
//     newsapikey;

//   // dispatch(showLoading())

//   // console.log(dateline);

//   fetch(url)
//     .then(res => res.json())
//     .then(data => dispatch(showData(data)), error => console.log(error));
// };