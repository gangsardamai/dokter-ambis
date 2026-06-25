'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MentorType } from '@/app/types/mentor'
import MentorSkeleton from '../../Skeleton/Mentor'

const Mentor = () => {
  const [mentor, setMentor] = useState<MentorType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')

        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setMentor(data.MentorData)
      } catch (error) {
        console.error('Error fetching mentor:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className='bg-deep-slate scroll-mt-12 py-20' id='mentor'>
      <div className='container relative'>

        <div className='text-center mb-10'>
          <h2 className='text-midnight_text font-bold'>
            Belajar Bersama Mentor Dokter Ambis
          </h2>

          <p className='text-black/70 max-w-2xl mx-auto mt-4'>
            Mentor berpengalaman yang memahami sistem blok berbagai
            fakultas kedokteran di Indonesia.
          </p>
        </div>

        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <MentorSkeleton key={i} />
              ))
            : mentor.map((items, i) => (
                <div key={i}>
                  <div className='m-3 py-10 mt-4 text-center rounded-2xl bg-white shadow-md border border-black/5'>

                    <div className='relative mb-8'>
                      <Image
                        src={items.imgSrc}
                        alt='mentor-image'
                        width={240}
                        height={240}
                        className='inline-block m-auto rounded-full border border-black/10'
                      />
                    </div>

                    <div>
                      <h5 className='font-semibold text-xl'>
                        {items.name}
                      </h5>

                      <p className='text-base text-black/60 pt-2'>
                        {items.profession}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}

export default Mentor