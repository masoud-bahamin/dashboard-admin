import React, { useState } from 'react'
import Breadcramp from '../../Components/Breadcramp/Breadcramp'
import Comments from '../../Components/Comments/Comments'
import Slider1 from '../../Components/Sliders/Slider1'

export default function Details() {

    const [tab, setTab] = useState("1")

    return (
        <>
            <Breadcramp title="Magdalena Cake" subTitle="Product" sub="Details" />
            <div className='main-container bg-main mt-3'>
                <div className='row'>
                    <div className='col-lg-8 col-md-12 col-sm-12 p-3'>
                        <div className='bg-white p-4 rounded-25p shadow-sm mb-4 '>
                            <div>
                                <Slider1 />
                            </div>
                        </div>

                        <div className='bg-white p-4 rounded-25p shadow-sm mb-4'>
                            <div className='d-flex mb-4'>
                                <span onClick={() => setTab("1")} 
                                 className={`fs-14 pointer hover-gold me-4 ${tab === "1" && "color-gold4"}`}>Details</span>
                                <span onClick={() => setTab("2")} 
                                 className={`fs-14 pointer hover-gold me-4 ${tab === "2" && "color-gold4"}`}>Comments(12)</span>
                                <span onClick={() => setTab("3")} 
                                 className={`fs-14 pointer hover-gold me-4 ${tab === "3" && "color-gold4"}`}>Questions(6)</span>
                            </div>
                            {tab === "1" ? (
                                <div className='py-2'>
                                    <p className='my-3 fs-14 fw-600'>Augue Vitae Commodo</p>
                                    <p className='my-3 fs-14  lh-base'>
                                        Vivamus ultricies augue vitae commodo condimentum. Nullamfaucibus eros eu mauris feugiat,
                                        eget consectetur tortor tempus. Sed volutpatmollis dui eget fringilla. Vestibulum blandit
                                        urna ut tellus lobortis tristique.Vestibulum ante ipsum primis in faucibus orci luctus
                                        et ultrices posuere cubiliaCurae; Pellentesque quis cursus mauris. Nam in ornare erat.
                                        Vestibulum convallisenim ac massa dapibus consectetur. Maecenas facilisis eros ac felis
                                        mattis, egetauctor sapien varius.
                                        <br />
                                        Nulla non purus fermentum, pulvinar dui condimentum, malesuada nibh. Sed viverra quam urna,
                                        at condimentum ante viverra non. Mauris posuere erat sapien, a convallis libero lobortis
                                        sit amet. Suspendisse in orci tellus.
                                    </p>
                                    <p className='my-3 fs-14 fw-600 lh-base'>Phasellus Efficitur</p>
                                    <p className='my-3 fs-14 lh-base'>
                                        Tellus a sem condimentum, vitae convallis sapien feugiat.Aenean non nibh nec nunc aliquam iaculis.
                                        Ut quis suscipit nunc. Duis at lectusa est aliquam venenatis vitae eget arcu. Sed egestas felis
                                        eget convallismaximus. Curabitur maximus, ligula vel sagittis iaculis, risus nisi tinciduntsem,
                                        ut ultricies libero nulla eu ligula. Nam ultricies mollis nulla, sedlaoreet leo convallis ac.
                                        Mauris nisl risus, tincidunt ac diam aliquet,convallis pellentesque nisi. Nam sit amet libero
                                        at odio malesuada ultricies avitae dolor. Cras in viverra felis, non consequat quam.
                                        Praesent a orci enim.Vivamus porttitor nisi at nisl egestas iaculis. Nullam commodo eget
                                        duisollicitudin sagittis. Duis id nibh mollis, hendrerit metus consectetur,ullamcorper risus.
                                        Morbi elementum ultrices nunc, quis porta nisi ornare sitamet.
                                        <br />
                                        Etiam tincidunt orci in nisi aliquam placerat. Aliquam finibus in sem utvehicula.
                                        Morbi eget consectetur leo. Quisque consectetur lectus eros, sedsodales libero ornare cursus.
                                        Etiam elementum ut dolor eget hendrerit.Suspendisse eu lacus eu eros lacinia feugiat sit
                                        amet non purus.
                                        <br />
                                        Pellentesque quis cursus mauris. Nam in ornare erat. Vestibulum convallis enim ac massa
                                        dapibus consectetur. Maecenas facilisis eros ac felis mattis, eget auctor sapien varius.
                                    </p>
                                    <p className='my-3 fs-14 fw-600 lh-base'>Elementum Ultrices</p>
                                    <table className="table fs-12">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First</th>
                                                <th>Last</th>
                                                <th>Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td>Vida</td>
                                                <td>@mivo</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Cata</td>
                                                <td>Lovren</td>
                                                <td>@lavin</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>David</td>
                                                <td>Molfo</td>
                                                <td>@damo</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ) : tab === "2" ? (
                                <div className='py-2'>
                                    <div className='d-flex align-items-center border-bottom mb-3'>
                                        <Comments title="Mimi Carretim" img="l-4.jpg" details="Pellentesque quis cursus mauris." />
                                        <span className='ms-auto me-2 d-none-450'>2 Likes</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 w-6 h-6 d-none-450">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div className='d-flex align-items-center border-bottom mb-3'>
                                        <Comments title="Mimi Carretim" img="l-5.jpg" details="Pellentesque quis cursus mauris." />
                                        <span className='ms-auto me-2 d-none-450'>1 Likes</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 w-6 h-6 d-none-450">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div className='d-flex align-items-center border-bottom mb-3'>
                                        <Comments title="Mimi Carretim" img="l-1.jpg" details="Pellentesque quis cursus mauris." />
                                        <span className='ms-auto me-2 d-none-450'></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 w-6 h-6 d-none-450">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div className='d-flex align-items-center border-bottom mb-3'>
                                        <Comments title="Mimi Carretim" img="l-2.jpg" details="Pellentesque quis cursus mauris." />
                                        <span className='ms-auto me-2 d-none-450'>3 Likes</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 w-6 h-6 d-none-450">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div className='d-flex align-items-center border-bottom mb-3'>
                                        <Comments title="Mimi Carretim" img="l-3.jpg" details="Pellentesque quis cursus mauris." />
                                        <span className='ms-auto me-2 d-none-450'>1 Likes</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 w-6 h-6 d-none-450">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div className='d-flex align-items-center border-bottom mb-3'>
                                        <Comments title="Mimi Carretim" img="l-5.jpg" details="Pellentesque quis cursus mauris." />
                                        <span className='ms-auto me-2 d-none-450'></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 w-6 h-6 d-none-450">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </div>
                                    <div className="input-group  rounded-25p bg-l border mt-4 align-items-center d-flex">
                                        <input type="text" className="form-control border-none rounded-25p bg-l fs-12" placeholder="Add a comment" />
                                        <button className="btn btn-outline-secondary bg-gold4 text-white rounded-25p border-none" >
                                            Send
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className='py-2'>
                                    <details >
                                        <summary className='color-gold4 my-3'>1. Anim pariatur cliche reprehenderit, enim eiusmod?</summary>
                                        <p className='lh-base fs-14 py-2'>
                                            moonofficia aute, non cupidatat skateboard dolor brunch. Brunch 3wolf moon tempor,
                                            sunt aliqua put a bird on it squidsingle- origin coffee nulla assumenda
                                            shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wesanderson
                                            cred nesciunt sapiente ea proident.Ad veganexcepteur butcher vice lomo.
                                            Leggings occaecat craftbeer farm - to - table, raw denim aesthetic synth
                                            nesciuntyou probably haven't heard of them accusamus laboresustainable VHS.
                                        </p>
                                    </details>
                                    <details >
                                        <summary className='color-gold4 my-3'>2. Cred nesciunt sapiente ea proident?</summary>
                                        <p className='lh-base fs-14 py-2'>
                                            moonofficia aute, non cupidatat skateboard dolor brunch. Brunch 3wolf moon tempor,
                                            sunt aliqua put a bird on it squidsingle- origin coffee nulla assumenda
                                            shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wesanderson
                                            cred nesciunt sapiente ea proident.Ad veganexcepteur butcher vice lomo.
                                            Leggings occaecat craftbeer farm - to - table, raw denim aesthetic synth
                                            nesciuntyou probably haven't heard of them accusamus laboresustainable VHS.
                                        </p>
                                    </details>
                                    <details >
                                        <summary className='color-gold4 my-3'>3. Bird on it squidsingle- origin coffee nulla assumenda?</summary>
                                        <p className='lh-base fs-14 py-2'>
                                            moonofficia aute, non cupidatat skateboard dolor brunch. Brunch 3wolf moon tempor,
                                            sunt aliqua put a bird on it squidsingle- origin coffee nulla assumenda
                                            shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wesanderson
                                            cred nesciunt sapiente ea proident.Ad veganexcepteur butcher vice lomo.
                                            Leggings occaecat craftbeer farm - to - table, raw denim aesthetic synth
                                            nesciuntyou probably haven't heard of them accusamus laboresustainable VHS.
                                        </p>
                                    </details>
                                    <details >
                                        <summary className='color-gold4 my-3'>4. Nesciunt sapiente ea proident.Ad veganexcepteur butcher?</summary>
                                        <p className='lh-base fs-14 py-2'>
                                            moonofficia aute, non cupidatat skateboard dolor brunch. Brunch 3wolf moon tempor,
                                            sunt aliqua put a bird on it squidsingle- origin coffee nulla assumenda
                                            shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wesanderson
                                            cred nesciunt sapiente ea proident.Ad veganexcepteur butcher vice lomo.
                                            Leggings occaecat craftbeer farm - to - table, raw denim aesthetic synth
                                            nesciuntyou probably haven't heard of them accusamus laboresustainable VHS.
                                        </p>
                                    </details>
                                    <details >
                                        <summary className='color-gold4 my-3'>5. Anim pariatur cliche reprehenderit, enim eiusmod?</summary>
                                        <p className='lh-base fs-14 py-2'>
                                            moonofficia aute, non cupidatat skateboard dolor brunch. Brunch 3wolf moon tempor,
                                            sunt aliqua put a bird on it squidsingle- origin coffee nulla assumenda
                                            shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wesanderson
                                            cred nesciunt sapiente ea proident.Ad veganexcepteur butcher vice lomo.
                                            Leggings occaecat craftbeer farm - to - table, raw denim aesthetic synth
                                            nesciuntyou probably haven't heard of them accusamus laboresustainable VHS.
                                        </p>
                                    </details>
                                    <details >
                                        <summary className='color-gold4 my-3'>6. Nesciunt sapiente ea proident.Ad veganexcepteur butcher?</summary>
                                        <p className='lh-base fs-14 py-2'>
                                            moonofficia aute, non cupidatat skateboard dolor brunch. Brunch 3wolf moon tempor,
                                            sunt aliqua put a bird on it squidsingle- origin coffee nulla assumenda
                                            shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wesanderson
                                            cred nesciunt sapiente ea proident.Ad veganexcepteur butcher vice lomo.
                                            Leggings occaecat craftbeer farm - to - table, raw denim aesthetic synth
                                            nesciuntyou probably haven't heard of them accusamus laboresustainable VHS.
                                        </p>
                                    </details>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 p-3'>
                        <div className='bg-white p-4 rounded-25p shadow-sm mb-4'>
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                    <p className='fs-14 p-color3 ms-1 me-4'>4 Likes</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                    </svg>
                                    <p className='fs-14 p-color3 ms-1'>2 Comments</p>
                                </div>

                            </div>
                            <p className='fs-14 p-color3 ms-1 mb-3 lh-sm'>
                                Vivamus ultricies augue vitae commodo condimentum.
                                Nullam faucibus eros eu mauris feugiat, eget consectetur tortor tempus.
                            </p>
                            <p className='fs-14 p-color3 ms-1 mb-3 lh-sm'>
                                Sed volutpat mollis dui eget fringilla. Vestibulum blandit urna ut tellus lobortis tristique.
                                Vestibulum ante ipsum primis in
                                faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis cursus mauris.
                            </p>
                            <p className='fs-14 p-color3 ms-1 mb-3 lh-sm'>
                                Nulla non purus fermentum, pulvinar dui condimentum, malesuada nibh.
                                Sed viverra quam urna, at condimentum ante viverra non.
                                Mauris posuere erat sapien, a convallis libero lobortis sit amet. Suspendisse in orci tellus.
                            </p>
                            <p className='p-color4 fs-14 mb-2'>Tags</p>
                            <div className='d-flex flex-wrap'>
                                <span className='border-gold color-gold4 rounded-25p fs-12 py-1 px-3 m-1'>DESSERT</span>
                                <span className='border-gold color-gold4 rounded-25p fs-12 py-1 px-3 m-1'>PASTA</span>
                                <span className='border-gold color-gold4 rounded-25p fs-12 py-1 px-3 m-1'>CAKE</span>
                                <span className='border-gold color-gold4 rounded-25p fs-12 py-1 px-3 m-1'>ALPANIA</span>
                            </div>
                        </div>
                        <div className='bg-white p-4 rounded-25p shadow-sm mb-4'>
                            <h5 className='h5 py-3 fw-600'>Similar Projects</h5>
                            <img src='/img/2.jpg' className='pointer w-50 pe-2 mb-3 rounded-25p' />
                            <img src='/img/3.jpg' className='pointer w-50 ps-2 mb-3 rounded-25p' />
                            <img src='/img/4.jpg' className='pointer w-50 pe-2 mb-3 rounded-25p' />
                            <img src='/img/5.jpg' className='pointer w-50 ps-2 mb-3 rounded-25p' />
                            <img src='/img/1.jpg' className='pointer w-50 pe-2 mb-3 rounded-25p' />
                            <img src='/img/6.jpg' className='pointer w-50 ps-2 mb-3 rounded-25p' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
