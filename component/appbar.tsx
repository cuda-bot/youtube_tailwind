import { SearchBar } from "./searchbar"



export const AppBar =()=>{
    return<div className="flex justify-between p-3">
        <div className=" text-lg  inline-flex items-center pl-3">
            youtube

        </div>
        <div>
            <SearchBar>

            </SearchBar>

            

        </div>
        <div className="text-lg inline-flex items-center pr-2">
            signin

        </div>

    </div>
}