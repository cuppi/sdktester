'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cityUrl = exports.cityUrl = {
  jbzCities: '/location/cities',
  jbzCityByCoordinate: '/location/city',
  jbzCityById: '/location/citybyid',
  jbzDistricts: '/location/districts',
  jbzHotCities: '/location/hotcities'
};

var cinemaUrl = exports.cinemaUrl = {
  jbzList: '/cinema/cinemas',
  jbzDetail: '/cinema/cinemaDetail',
  jbzScreeningFilmList: '/cinema/films',
  jbzScreeningDateList: '/cinema/filmshowdates',
  jbzScreeningItems: '/cinema/filmshows',
  jbzRealtimeSeat: '/cinema/realtimeseats'
};

var filmUrl = exports.filmUrl = {
  jbzHotFilms: '/film/hotFilms',
  jbzHotFilmsPage: '/film/hotFilmsPage',
  jbzHotFilmsSimple: '/film/hotFilmsSimple',
  jbzWaitFilms: '/film/upcomingFilms',
  jbzWaitFilmsPage: '/film/upcomingFilmsPage',
  jbzFilmDetailByPartner: '/film/filmByPartner',
  jbzFilmDetail: '/film/film',
  jbzFilmDate: '/film/filmDate'
};

var mineUrl = exports.mineUrl = {};

var accountUrl = exports.accountUrl = {
  jbzLogin: '/account/login',
  jbzLogout: '/account/logout',
  jbzVerifycode: '/account/verifycode',
  jbzRegister: '/account/register',
  jbzUpdatepass: '/account/updatepass'
};

var tradeUrl = exports.tradeUrl = {
  jbzLockSeat: '/main/lockseat',
  jbzAppApplyTicket: '/appapi/applyticket',
  jbzWepApplyTicket: '/webapi/applyticket',
  jbzCancelOrder: '/main/cancelOrder',
  jbzAppPrepay: '/webapi/prepay',
  jbzWebPrepay: '/appapi/prepay'
};

var otherUrl = exports.otherUrl = {
  jbzBanners: '/banner/banner',
  jbzSearch: '/main/search'
};