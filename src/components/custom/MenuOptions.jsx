
const MenuOptions = ({ menuItem, goGreen, handleInputChange, name, formData }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center my-4 cursor-pointer'>
      {menuItem.map(option => {

        const isActive =
          (name === "budget" && option.title === formData.budget) ||
          (name === "travelers" && option.people === formData.travelers);

        return (
          <div key={option.id}
            className={`card
            ${isActive ? 'card-active' : ''}
            ${goGreen ? 'card-budget' : 'card-travelers'}
            border rounded-lg p-4
            `}
            onClick={() => handleInputChange(name, option.title)}
          >
            <h2 className="text-2xl ">
              {option.icon}
            </h2>
            <h3 className={`text-xl font-bold ${goGreen ? 'text-green-300' : 'text-purple-300'}`}>{option.title}</h3>
            <p className="text-sm text-purple-100">{option.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default MenuOptions;