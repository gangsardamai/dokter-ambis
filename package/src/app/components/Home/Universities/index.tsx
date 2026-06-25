const Universities = () => {
  const universities = [
    'Universitas Airlangga',
    'Universitas Brawijaya',
    'Universitas Jember',
    'Universitas Indonesia',
    'Universitas Padjadjaran',
    'Universitas Hasanuddin',
  ]

  return (
    <section className='py-20 bg-white' id='universitas'>
      <div className='container'>

        <div className='text-center mb-12'>
          <h2 className='text-midnight_text font-bold'>
            Universitas Tersedia
          </h2>

          <p className='text-black/70 mt-4 max-w-2xl mx-auto'>
            Pilih universitas sesuai kampus Anda dan pelajari materi berdasarkan sistem blok yang digunakan.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {universities.map((univ, index) => (
            <div
              key={index}
              className='bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-lg duration-300 text-center'
            >
              <h5 className='font-semibold text-lg'>
                {univ}
              </h5>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Universities