import React from 'react'

const Checkings = ({checkings}) => {
    return (
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Checking Date-Time
            </th>
            <th scope="col" className="px-6 py-3">
              CheckOut Date - Time
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Requirements
            </th>
            <th scope="col" className="px-6 py-3">
              No of Guests
            </th>
            <th scope="col" className="px-6 py-3">
              Budget
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {checkings && checkings.length > 0 ?(checkings?.map((item) => (
            <tr key={item._id}>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
              >
                <img
                  src={item.user.photo}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                {item.user.name} {/* Dummy data for user's name */}
              </th>
              <td className="px-6 py-4">{item.checkingDate}-{item.checkingTime}</td> {/* Dummy data for checking date */}
              <td className="px-6 py-4">{item.checkOutDate}-{item.checkOutTime}</td> {/* Dummy data for checkout date */}
              <td className="px-6 py-4">{item.user.phone}</td> {/* Dummy data for phone */}
              <td className="px-6 py-4">{item.requirement}</td> {/* Dummy data for requirements */}
              <td className="px-6 py-4">{item.nog}</td> {/* Dummy data for number of guests */}
              <td className="px-6 py-4">{item.minBudget}-{item.maxBudget}</td> {/* Dummy data for budget */}
              <td className="px-6 py-4">{item.status}</td> {/* Dummy data for status */}
            </tr>
          ))):(<p>No records to show</p>)}
        </tbody>
      </table>
    );
  };

export default Checkings

