import s from './Project.module.css';

const Project = ({ project }) => {
  const customerName = project.customerName ? project.customerName : 'Untitled';
  const customerClass = project.customerName ? s.customerName : s.untitled;

  const getStatusClass = (status) => {
    switch (status) {
      case 'In progress':
        return s.progress;
      case 'Done':
        return s.done;
      case 'Cancelled':
        return s.cancelled;
      case 'Negotiation':
        return s.negotiation;
      default:
        return '';
    }
  };

  const getDate = (data) => {
    const date = new Date(data);
    return date.toLocaleDateString().split('/').join('.');
  };

  return (
    <div className={s.projectCard}>
      <div className={s.cardHeader}>
        <h3 className={customerClass}>{customerName}</h3>
        <p className={s.projectId}>ID: {project.projectId}</p>
      </div>
      <div className={s.cardContent}>
        <p className={s.address}>{project.address}</p>
        <div className={s.rooms}>
          {project.rooms.map((room) => (
            <p key={room.id} className={s.room}>
              {room.name}
            </p>
          ))}
        </div>
        <div className={s.details}>
          <div className={s.update}>
            <p>Last updated</p>
            <p>{getDate(project.updated_timestmp)}</p>
          </div>
          <div className={s.total}>
            <p>Total</p>
            <p>
              $
              {project.totalProject.toLocaleString('en-US', {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className={s.status}>
            <p>Stage</p>
            <p className={getStatusClass(project.projectState)}>{project.projectState}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

