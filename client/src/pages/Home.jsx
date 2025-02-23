import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'

import state from '../store/index'
import { CustomButton } from '../components'
const Home = () => {
    const snap = useSnapshot(state)
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
               <motion.header>
                <img className='w-8 h-8 object-contain' src="./threejs.png" alt="logo" />
               </motion.header>
               <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            LET'S <br className='xl:block hidden'/> DO IT.
                        </h1>
                        
                    </motion.div>
                    <motion.div className='flex flex-col gap-5' {...headContentAnimation}>
                        <p className='max-w-md font-normal text-gray-600 text-base'>Create Unique and exclusive shirt with our brand new customization tool <strong>Unleash your imagination and difine your style</strong></p>
                        <CustomButton
                            type="filled"
                            title="Customize it"
                            handleClick={()=> state.intro=false}
                            customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                        />
                    </motion.div>
           
               </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home