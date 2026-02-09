import React from 'react'

const AddMember = () => {
    return (
        <>
            <div className='w-full p-4 text-center'>
                <h1 className='text-2xl font-medium'>IIBA State President Portal</h1>
            </div>

            <div className='grid gap-2 grid-cols-2 '>
                <h1 className='font-medium p-4 mt-2 text-2xl text-center'>Member Detail </h1>

                <div className='flex justify-center p-4'>
                    <div className='p-2'>
                        <form action="">
                            <input className='p-1 ps-3 border-1 border-sky-900 rounded-md' type="text" placeholder='Search Member' />
                        </form>
                    </div>

                    <div className='mt-2'>
                        <button className='p-1 bg-green-500 rounded-lg w-30 font-medium'>Add Member</button>
                    </div>

                </div>



            </div>

            <div>
                <table border="1" style={{ marginTop: 20 }} className='w-[90vw] m-auto'>
                    <thead className=''>
                        <tr className=''>
                            <th className='text-start'>Name</th>
                            <th className='text-start'>Email</th>
                            <th className='text-start'>Phone</th>
                            <th className='text-start'>Company</th>
                            <th className='text-start'>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>atheghghghghghghr</td>
                            <td>athertanveer6@gjdf</td>
                            <td>9884984</td>
                            <td>indian corporate pvt</td>
                            <td>
                                <button className='p-1 px-2'>Edit</button>
                                <button className='p-1'>Delete</button>
                            </td>
                        </tr>

                         <tr>
                            <td>atheghghghghghghr</td>
                            <td>athertanveer6@gjdf</td>
                            <td>9884984</td>
                            <td>indian corporate pvt</td>
                            <td>
                                <button className='p-1 px-2 w-17 mx-1 bg-amber-300 rounded-lg'>Edit</button>
                                <button className='p-1 w-18 bg-red-500 rounded-lg'>Delete</button>
                            </td>
                        </tr>

                        

                    </tbody>
                </table>
            </div>

        </>

    )
}

export default AddMember