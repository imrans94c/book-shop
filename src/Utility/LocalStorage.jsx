import { toast } from "react-toastify";

// const getStoredWishListId = () => {
//     const storedWishListId = localStorage.getItem('wish-list');
//     if(storedWishListId){
//         return JSON.parse(storedWishListId);
//     } 
//     return[];
// }




// const saveWishListId = id => {
//     const storedWishListIds = getStoredWishListId();
//     const exist = storedWishListIds.find(wishId => wishId === id );
//     if(!exist){
//         storedWishListIds.push(id);
//         localStorage.setItem('wish-list', JSON.stringify(storedWishListIds));
//         toast('Added to wish list');
//     }else{
//         toast("Already added");
//     }
// }

// export {getStoredWishListId, saveWishListId}

export const getStoredListId = (data) => {
    const storedListId = localStorage.getItem(data);
    if(storedListId){
       return JSON.parse(storedListId);
    }
    return [];

}


export const saveListId = (id, data) => {
    let storedListIds = getStoredListId(data);
    const readData = getStoredListId('read-list');
    const wishData = getStoredListId('wish-list');
    const exist = storedListIds.find(ids => ids === id );
    if(!exist){
            const   read = readData.find(rid => rid === id);
            const   wish = wishData.find(wid => wid === id);
            if(read){
                toast("Already added to read");
              }else{
                if(!read || !wish){
                    storedListIds.push(id);
                    localStorage.setItem(data, JSON.stringify(storedListIds));
                    toast('Added to list');
                }
              }
        } 
    else{
        toast("Already added");
    }

}

