import { fetchWeatherStationsByLocality } from "@/actions/getWeatherByLocalityName";
import {
  setLocalityID,
  setSearchValue,
} from "@/lib/features/product/SearchedValueSlice";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hook";
import { SearchIcon } from "@heroicons/react/solid";
import debounce from "lodash.debounce";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const SearchInput = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cityName, setCityName] = useState("");
  const dropdownRef = useRef(null); // Ref for dropdown container

  console.log("this is Data", suggestions);

  // Initialize the store with the product information
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    // store.dispatch(initializeProduct(product))
    initialized.current = true;
  }
  const SearchedValue = useAppSelector(
    (state) => state.searchedValue.searchValue
  );
  const searchedLocalityID = useAppSelector(
    (state) => state.searchedValue.localityID
  );
  const dispatch = useAppDispatch();

  console.log("this is the searchedLocalityID", searchedLocalityID);

  useEffect(() => {
    // Get stored values from localStorage
    const storedSearchValue = localStorage.getItem("searchedValue");
    const storedLocalityID = localStorage.getItem("searchedLocalityID");

    // If values exist, dispatch actions to update the Redux state
    if (storedSearchValue) {
      dispatch(setSearchValue(storedSearchValue));
    }

    if (storedLocalityID) {
      dispatch(setLocalityID(storedLocalityID));
    }
  }, [dispatch]);

  useEffect(() => {
    // Save search value and locality ID to localStorage whenever they change
    localStorage.setItem("searchedValue", SearchedValue);
    localStorage.setItem("searchedLocalityID", searchedLocalityID);
  }, [SearchedValue, searchedLocalityID]);

  useEffect(() => {
    if (searchTerm && searchTerm !== cityName && !showDropdown) {
      // Define a debounced function
      const debouncedFetch = debounce(async () => {
        const data = await fetchWeatherStationsByLocality({
          localityName: searchTerm,
          page: 1,
          limit: 25,
          sortOrder: "desc",
        });

        setSuggestions(data); // Use data for suggestions
        setShowDropdown(true); // Show dropdown when there are suggestions
      }, 500); // 500ms debounce delay

      debouncedFetch();

      // Cleanup function to cancel debounce if component unmounts
      return () => {
        debouncedFetch.cancel();
      };
    } else {
      setShowDropdown(false); // Hide dropdown when searchTerm is empty or matches cityName
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) {
      return;
    }

    alert("You have searched for " + term);
    setSearchTerm(term);
    // router.push(`/search?term=${term}`);
    setShowDropdown(false); // Hide dropdown when search is initiated
  };

  const handleClick = (localityName, localityid) => {
    setSearchTerm(localityName);
    setCityName(localityName);
    searchInputRef.current.value = localityName; // Set the value in the input field

    setShowDropdown(false);
    dispatch(setSearchValue(localityName));
    dispatch(setLocalityID(localityid)); // Dispatch an action to update the Redux state
    router.push(`/search?term=${localityName}`);
  };

  // Update the Redux store when the input value changes
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchTerm(e.target.value);
    dispatch(setSearchValue(newValue)); // Dispatch an action to update the Redux state
  };

  return (
    <div className="    flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
      <SearchIcon className="h-5 mr-3 text-gray-500" />
      <input
        ref={searchInputRef}
        type="text"
        value={SearchedValue} // Bind the input value to the Redux state
        onChange={handleInputChange} // Handle changes
        className="flex-grow  focus:outline-none"
      />
      {SearchedValue && (
        <div
          className="cursor-pointer text-gray-500 border-r-2 pr-3 "
          onClick={() => {
            setSearchTerm("");
            setSuggestions([]);
            setShowDropdown(false);
            dispatch(setSearchValue("")); // Clear the Redux state
          }}
        >
          &#10005;
        </div>
      )}

      {showDropdown && (
        <div
          ref={dropdownRef} // Add ref to the dropdown container
          className="absolute bg-white border border-gray-300 rounded-md shadow-lg mt-[10rem]  w-[40rem] border-t-0 max-h-60 overflow-y-auto top-5 pt-5   "
        >
          {suggestions.length > 0 ? (
            (console.log("Suggestions", suggestions),
            (
              <ul>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() =>
                      handleClick(
                        suggestion?.localityName,
                        suggestion?.localityId
                      )
                    }
                  >
                    {suggestion?.localityName}
                  </li>
                ))}
              </ul>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}

      <div className=" cursor-pointer">
        <img src="../../mic.png" className="h-8" />
      </div>
      <div className=" cursor-pointer">
        <img src="../../lens.png" className="h-8" />
      </div>
    </div>
  );
};

export default SearchInput;
