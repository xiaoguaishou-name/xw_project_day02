import {v4 as uuidv4} from 'uuid'

//这个是工具函数，专门用来生成或获取用户临时id
function getUserTempId() {
  let userTempId = localStorage.getItem('USERTEMPID_KEY')
  if (!userTempId) {
    userTempId = uuidv4()
    localStorage.setItem('USERTEMPID_KEY', userTempId)
  }
  return userTempId
}
export {getUserTempId}