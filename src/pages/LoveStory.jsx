import React from 'react';
import { motion } from 'framer-motion';
import FloatingHeart from '../components/common/FloatingHeart';
import './pages.css'
import { RELATIONSHIP_START_DATE } from '../config/constants';

const LoveStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 py-8 md:py-16 px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 md:mb-8">Our Love Story</h2>

        {[...Array(10)].map((_, i) => (
          <FloatingHeart
            key={i}
            delay={i * 0.5}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="prose prose-lg mx-auto text-gray-700"
        >
          <p className="mb-4 md:mb-6 text-base md:text-lg">
            <p className='font-mono font-extrabold text-2xl mb-1'> First Of all Happy Birthday my love,my baby,my cutie</p> <br />
            So,I will start from the very beginning the day we met first after your coaching in winters on the streets
            Where we are not able to see each other face properly but still from that day I started falling for you.
          </p>
          <p className="mb-4 md:mb-6 text-base md:text-lg">
            I know the day we come together into relationship {RELATIONSHIP_START_DATE} from that day till now 2025-01-16,
            From Our first meetup after relationship at Gurdwara, Our first kiss at fort, Our first date at V mart cafe (naam nhi yaad 😂)
            To Our nth date and kisses we spent 5 years together and yeah many more to goo....
            Every thing I did is first and last with you
            Every moment spent with you is a unforgettable, and I fall more in love with you each passing day.
            You're not just my girlfriend - you're my best friend, my confidante, and my soulmate, you're my every thing
            You know that we Fight a lot but in the end we are together and we fix it again and again that's the love cutie
            Every day comes with challenge,but my love for you is constant even it's getting increase day by day.
          </p>
          <p className="text-base md:text-lg">
            Chlo ab kaafi baate ho gyi kuch but kya kre you are the person jis pe likhne betha to siyahi khtm ho jaye pr apki tareef
            nhi rukengi....
            Kuch lines for you my love
            <div className="shyari flex flex-col gap-5 mt-5 mb-5 justify-center items-center ">

              <div className='shyari1'>
                <p>"Tujse Wo Aakhri Ishq Hai,</p>
                <p>Jo Pehli Baar Hua Hai Mujhe...🖤🖤"</p>
              </div>
              <div className='shyari2'>
                <p>"Likhu... </p>
                <p>Toh lafz tum ho </p>
                <p>Sochu... </p>
                <p>Toh khayal tum ho </p>
                <p>Maangu... </p>
                <p>Toh dua tum ho </p>
                <p>Sach kahu... </p>
                <p>Toh mohabbat tum ho" </p>
              </div>
              <div className='shyari3'>
                <p>"Pyaar kiya hai tumse </p>
                <p>Befikar Raho </p>
                <p>Narazgi Ho Sakti Hai, Par</p>
                <p>Nafrat Kabhi Nahi Hogi </p>
              </div>
              <div>
                <p className='highlight'>"Hum woh hai jo lafzon ka intezar nhi krte,aakhe padh lete hai 🖤"</p>
                <p className='highlight'>"Baat bs itni si hai ab Ya to tum ya koi nhi 🖤" </p>
              </div>

            </div>
            <p>
              I love the way you laugh, the way you care for others, and how you make me want to be a better person. You're the missing piece I never knew I needed.
            </p>
            And It was not a dream to be with you,it was a prayer......
            <p>At last it's your day so we will enjoy a lot today I love you 5666666*10^9999 times </p>
            <p className='font-mono font-extrabold text-3xl mt-4'>Happy Birthday cutie 🖤🖤💫</p>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoveStory;