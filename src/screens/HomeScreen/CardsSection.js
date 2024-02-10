import React, { Fragment } from 'react'
import CardComponent from '../../components/CardComponent'
import { IconBrandWhatsapp, IconBrandYoutube, IconLink, IconNotification, IconPdf, IconPhotoScan, IconSpeakerphone, IconTextPlus, IconWifi } from '@tabler/icons-react'
import { RouteConstants } from '../../Routers.js/RouteConstants'

const CardsSection = () => {
  return (
    <Fragment>
        <div className='flex w-full flex-col gap-4 items-center'>
            <div className='w-[500px]'>
            <CardComponent name="Links/URL" icon={<IconLink size="18"/>}  link={RouteConstants.LINK}/>
            </div>
            <div className='grid grid-cols-12 gap-4 w-[500px]'>
            <div className='col-span-6'><CardComponent name="PDF" icon={<IconPdf size="18"/>}/></div>
            <div className='col-span-6'><CardComponent name="Image" icon={<IconPhotoScan size="18"/>}/></div>
            </div>
            <div className='grid grid-cols-12 gap-4 w-[500px]'>
            <div className='col-span-4'><CardComponent name="Text" icon={<IconTextPlus size="18"/>}/></div>
            <div className='col-span-2'><CardComponent small={true} icon={<IconBrandWhatsapp size="20" color='#25D366'/>} /></div>
            <div className='col-span-2'><CardComponent small={true} icon={<IconBrandYoutube size="20" color='#FF0000'/>} /></div>
            <div className='col-span-4'><CardComponent name="Audio" icon={<IconSpeakerphone size="18"/>}/></div>
            </div>
            <div className='grid grid-cols-12 gap-4 w-[500px]'>
            <div className='col-span-8'><CardComponent name="Google Play/App Store" icon={<IconNotification size="18"/>}/></div>
            <div className='col-span-4'><CardComponent name="Wi-Fi" icon={<IconWifi size="18"/>}/></div>
            </div>
        </div>
    </Fragment>
  )
}

export default CardsSection
