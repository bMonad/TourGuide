const FormField = ({ label, component, error }) => {
    return (
        <div className='px-[5%] md:px-[10%] lg:px-[15%] xl:px-[20%] mt-10 relative'>
            <h3
                className='text-xl my-3 text-purple-100 font-medium'>
                {label}
            </h3>

            {component}
            {error}
        </div>
    )
}

export default FormField