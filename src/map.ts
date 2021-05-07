/* eslint-disable no-useless-escape */
// 经度
export const longitude = /^[-]?(([1-9]\d?)|(1[0-7]\d))(\.\d{0,6})|180|0(\.\d{6,6})$/
// 纬度
export const latitude = /^[-]?(0|([1-9]\d?))(\.\d{0,6})$/

// 经度(度分秒) dms-> degree minute second
export const longitude_dms = /^[W|E]{1}([0-9]{1,3}\°)*([0-9]{1,2}\')*([0-9]{1,2}(\.[0-9]{1,2})*\")*$/
// 纬度(度分秒) dms-> degree minute second
export const latitude_dms = /^[N|S]{1}([0-9]{1,2}\°)*([0-9]{1,2}\')*([0-9]{1,2}(\.[0-9]{1,2})*\")*$/
