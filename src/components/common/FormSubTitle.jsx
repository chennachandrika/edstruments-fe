const FormSubTitle = ({ Icon, title }) => {
  return (
    <div className="flex items-center justify-start mb-4">
      <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-200 rounded-3xl flex items-center justify-center mr-2">
        <Icon className="w-3 h-3 md:w-4 md:h-4" />
      </div>
      <h1 className="font-medium text-base md:text-xl">{title}</h1>
    </div>
  );
};

export default FormSubTitle;
