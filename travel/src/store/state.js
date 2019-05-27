let defaultCity = '宁波'
try{
   if(localStorage.city){
     defaultCity = localStorage.city
   }
}catch (e) {}

export default {
    city: defaultCity
}