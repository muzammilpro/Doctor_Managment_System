import React from 'react'

export default function page() {
  return (
    <div>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-green-600 h-40 shadow-sm">Total no of Doctors: <br /> 106</div>
        <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-red-600 h-40 shadow-sm">Total number of Appointments: <br /> 164</div>
        <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-blue-600 h-40 shadow-sm">Doctors Available: <br /> 74</div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm">


        <div class="relative overflow-x-auto">
          <tr>
            <th scope="col" class="px-6 py-3">
              <label htmlFor="">Doctor Name</label>
              <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            </th>
            <th scope="col" class="px-6 py-3">
              <label htmlFor="">Specialization</label>
              <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            </th>
            <th scope="col" class="px-6 py-3">
              <label htmlFor="">Contact Info</label>
              <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            </th>
            <th scope="col" class="px-6 py-3">
              <label htmlFor="">Shedule</label>
              <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            </th>

            <th scope="col" class="px-6 py-3">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>

            </th>

          </tr>
          <table class="w-full text-sm text-left text-black dark:text-gray-400">
            <thead class="text-md bg-black text-white  uppercase dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Doctor Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Specialization
                </th>
                <th scope="col" class="px-6 py-3">
                  Contact Info
                </th>
                <th scope="col" class="px-6 py-3">
                  Shedule
                </th>
                <th scope="col" class="px-6 py-3">

                </th>
                <th scope="col" class="px-6 py-3">

                </th>

              </tr>
            </thead>

            <tr>
              <th scope="col" class="px-6 py-3">
                Jason Aims
              </th>
              <th scope="col" class="px-6 py-3">
                Cardiologist
              </th>
              <th scope="col" class="px-6 py-3">
                03183563872
              </th>
              <th scope="col" class="px-6 py-3">
                9:00 am to 6:oo pm
              </th>
              <th scope="col" class="px-6 py-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </button>
              </th>
              <th scope="col" class="px-6 py-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </th>

            </tr>

            <tr>
              <th scope="col" class="px-6 py-3">
                Parker
              </th>
              <th scope="col" class="px-6 py-3">
                Psychiatrist
              </th>
              <th scope="col" class="px-6 py-3">
                031865463872
              </th>
              <th scope="col" class="px-6 py-3">
                9:00 am to 6:oo pm
              </th>
              <th scope="col" class="px-6 py-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </button>
              </th>
              <th scope="col" class="px-6 py-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </th>

            </tr>

            <tr>
              <th scope="col" class="px-6 py-3">
                Dean
              </th>
              <th scope="col" class="px-6 py-3">
                Gynaecologist
              </th>
              <th scope="col" class="px-6 py-3">
                03183563872
              </th>
              <th scope="col" class="px-6 py-3">
                9:00 am to 6:oo pm
              </th>
              <th scope="col" class="px-6 py-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </button>
              </th>
              <th scope="col" class="px-6 py-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </th>

            </tr>

            <tr>
              <th scope="col" class="px-6 py-3">
                Harry Makeena
              </th>
              <th scope="col" class="px-6 py-3">
                Orthopedic
              </th>
              <th scope="col" class="px-6 py-3">
                03183563872
              </th>
              <th scope="col" class="px-6 py-3">
                9:00 am to 6:oo pm
              </th>
              <th scope="col" class="px-6 py-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </button>
              </th>
              <th scope="col" class="px-6 py-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </th>

            </tr>

            <tr>
              <th scope="col" class="px-6 py-3">
                Sumera
              </th>
              <th scope="col" class="px-6 py-3">
                Ophthalmologist
              </th>
              <th scope="col" class="px-6 py-3">
                03183563872
              </th>
              <th scope="col" class="px-6 py-3">
                9:00 am to 6:oo pm
              </th>
              <th scope="col" class="px-6 py-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </button>
              </th>
              <th scope="col" class="px-6 py-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </th>

            </tr>

            <tr>
              <th scope="col" class="px-6 py-3">
                Steve Jones
              </th>
              <th scope="col" class="px-6 py-3">
                Urologist
              </th>
              <th scope="col" class="px-6 py-3">
                03183563872
              </th>
              <th scope="col" class="px-6 py-3">
                9:00 am to 6:oo pm
              </th>
              <th scope="col" class="px-6 py-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </button>
              </th>
              <th scope="col" class="px-6 py-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </th>

            </tr>


          </table>
        </div>



      </div>

    </div>
  )
}
