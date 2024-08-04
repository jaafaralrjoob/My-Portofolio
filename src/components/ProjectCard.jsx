const ProjectCard = ({ title, imageUrl, description }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="h-48 w-full transform object-fill transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
