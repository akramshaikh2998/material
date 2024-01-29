import { useState } from 'react';
import Dropdowndata from '../../../json/page';

export default function Example() {
  // const [optionVal, setOptionval] = useState();
  const { Material, Density } = Dropdowndata;
  const [selectedOption, setSelectedOption] = useState('');
  // const [weight, setWeight] = useState(0);
  const [result, displayresult] = useState(0);

  // Function to handle option selection
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const HandleOtherData = (i) => {
    console.log(i);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center"></div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Material
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Density kg/dm^3
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      <select
                        value={selectedOption}
                        onChange={handleSelectChange}
                      >
                        {Dropdowndata.map((item, i) => {
                          return (
                            <option
                              key={i}
                              value={item.Density}
                              id={item.id}
                              onClick={() => HandleOtherData(i)}
                            >
                              {item.Material}
                            </option>
                          );
                        })}
                      </select>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <label>{selectedOption}</label>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Input
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {
                  <tr>
                    {/* <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      Number
                    </td> */}

                    <label htmlFor="Number-field">Number:</label>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
                      {/* <input
                        className="font-bold border border-black inline-block "
                        type="text"
                      ></input> */}
                      <input
                        className="font-bold border border-black"
                        id="Number-field"
                        value={Number}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </td>
                  </tr>
                }
                {
                  <tr>
                    {/* <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      Length
                    </td> */}
                    <label htmlFor="Length-field">Length:</label>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {/* <input
                        className="font-bold border border-black inline-block "
                        type="text"
                      ></input> */}

                      <input
                        className="font-bold border border-black"
                        id="Length-field"
                        value={Number}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </td>
                  </tr>
                }
                {
                  <tr>
                    {/* <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      Width
                    </td> */}
                    <label htmlFor="Width-field">Width:</label>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {/* <input
                        className="font-bold border border-black inline-block "
                        type="text"
                      ></input> */}
                      <input
                        className="font-bold border border-black"
                        id="Width-field"
                        value={Number}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </td>
                  </tr>
                }
                {
                  <tr>
                    {/* <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      Thickness
                    </td> */}
                    <label htmlFor="Thickness-field">Thickness:</label>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  ">
                      {/* <input
                        className="font-bold border border-black inline-block "
                        type="text"
                      ></input> */}
                      <input
                        className="font-bold border border-black"
                        id="Thickness-field"
                        value={Number}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </td>
                  </tr>
                }

                {
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold text-gray-900 sm:pl-0">
                      Weigth:
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <lable></lable>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
