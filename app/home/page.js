import React from 'react'
import Image from 'next/image'
import Banner from '../components/Banner'
import img01 from '../../images/service-icon-1.png'
import img02 from '../../images/service-icon-2.png'
import img03 from '../../images/service-icon-3.png'
import doc1 from '../../images/doc1.jpg'
import doc2 from '../../images/doc2.webp'
import doc3 from '../../images/doc3.png'
import doc4 from '../../images/doc4.jpg'
import doc5 from '../../images/doc5.jpg'
import doc6 from '../../images/doc6.jpg'

export default function HomePage() {
  return (
    <>
      <div>
        {/* <header className="bg-indigo-500 text-white text-center py-8">
        <h1 className="text-4xl font-bold">Welcome to the Doctor Appointment System</h1>
        <p className="mt-4 text-lg">Book your appointments with experienced doctors</p>
      </header>

       */}

        <section className="container mx-auto my-8">
          <h2 className="text-2xl font-bold mb-4">Featured Doctors</h2>

          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 mx-auto">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={doc1}
                  alt="Dr. John Smith"
                  width={720}
                  height={400}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Dr.Jason Aims</h3>
                  <p className="text-gray-600 mb-3">Cardiologist</p>
                  <p className="text-gray-600">Experience: 12 years</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 mx-auto">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={doc2}
                  alt="Dr. John Smith"
                  width={720}
                  height={400}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Dr.Parker</h3>
                  <p className="text-gray-600 mb-3">Psychiatrist</p>
                  <p className="text-gray-600">Experience: 18 years</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 mx-auto">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={doc3}
                  alt="Dr. John Smith"
                  width={720}
                  height={400}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Dr. Dean</h3>
                  <p className="text-gray-600 mb-3">Gynaecologist</p>
                  <p className="text-gray-600">Experience: 09 years</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 mx-auto">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={doc4}
                  alt="Dr. John Smith"
                  width={720}
                  height={400}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Dr. Harry Makeena</h3>
                  <p className="text-gray-600 mb-3">Orthopedic</p>
                  <p className="text-gray-600">Experience: 21 years</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 mx-auto">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={doc5}
                  alt="Dr. Sumera"
                  width={720}
                  height={400}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Dr. Sumera</h3>
                  <p className="text-gray-600 mb-3">Ophthalmologist</p>
                  <p className="text-gray-600">Experience: 23 years</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 mx-auto">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={doc6}
                  alt="Dr. John Smith"
                  width={720}
                  height={400}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Dr.Steve Jones</h3>
                  <p className="text-gray-600 mb-3">Urologist</p>
                  <p className="text-gray-600">Experience: 12 years</p>
                </div>
              </div>
            </div>
            {/* Repeat similar structure for other featured doctors */}
          </div>
        </section>

        <section className="bg-gray-100 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to book your appointment?</h2>
          <p className="text-lg text-gray-600 mb-8">Choose a doctor and schedule your appointment now.</p>
          <button className="bg-indigo-500 text-white py-2 px-6 rounded-full">Book Now</button>
        </section>
      </div>

      <section className="bg-gray-100">
        <div className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4">Our services</h3>
            <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-500 mt-4">We provide you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Item 1 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="mb-4">
                <Image src={img01} alt="service icon" className="w-12 h-12" />
              </div>
              <h5 className="text-lg font-semibold mb-2">Search doctor</h5>
              <p className="text-gray-500">Choose your doctor from thousands of specialist, general and trusted hospitals.</p>
            </div>

            {/* Service Item 2 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="mb-4">
                <Image src={img02} alt="service icon" className="w-12 h-12" />
              </div>
              <h5 className="text-lg font-semibold mb-2">Online pharmacy</h5>
              <p className="text-gray-500">Buy your medicines with our mobile application with a simple delivery system.</p>
            </div>

            {/* Service Item 3 */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="mb-4">
                <Image src={img03} alt="service icon" className="w-12 h-12" />
              </div>
              <h5 className="text-lg font-semibold mb-2">Consultation</h5>
              <p className="text-gray-500">Free consultation with our trusted doctors and get the best recommendations.</p>
            </div>

            {/* Add more service items as needed */}
          </div>

          <div className="flex justify-center mt-8">
            <button type="button" className="btn btn-primary-outline">Learn more</button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4">Download our mobile apps</h3>
            <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-500 mt-4">Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely</p>
          </div>

          <div className="flex justify-center">
            <button type="button" className="btn btn-primary-outline">
              Download
            </button>
          </div>
        </div>
      </section>


    </>
  )
}
