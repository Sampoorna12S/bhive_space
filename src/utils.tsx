import space from './static_assets/4d85410baa074351aa948fc2c5da50d9.jpg';
import space1 from './static_assets/e2d0405175f74b5c815658a8ef5ef4b8.jpg';
import space2 from './static_assets/5934c0fd9d574bddbde8175d86a2d2da.jpg';
import space3 from './static_assets/0a74575ca6004b4bb20dcd131afc5849.jpg';
import space4 from './static_assets/0dfe4977f25940aa9d32507d4a233c9c.jpg';


export const imageUrl= (imagePath:string):string=>{
switch(imagePath){
  case "static_assets/4d85410baa074351aa948fc2c5da50d9.jpg":
    return space
    case "static_assets/e2d0405175f74b5c815658a8ef5ef4b8.jpg":
      return space1
  case "static_assets/5934c0fd9d574bddbde8175d86a2d2da.jpg":
    return space2
  case "static_assets/0a74575ca6004b4bb20dcd131afc5849.jpg":
    return space3
  case "static_assets/0dfe4977f25940aa9d32507d4a233c9c.jpg":
    return space4
  default:
    return space1
}
}