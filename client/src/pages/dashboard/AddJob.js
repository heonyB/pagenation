import { FormRow, Alert, FormRowSelect } from '../../components';

import { useAppContext } from '../../assets/context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    JobTypeOption,
    JobType,
    statusOptions,
    status,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? '일자리 수정하기' : '일자리 추가하기'}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          <FormRowSelect
            name="jobType"
            labelText="type"
            value={JobType}
            handleChange={handleJobInput}
            list={JobTypeOption}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block btn submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              제출하기
            </button>
            <button
              type="submit"
              className="btn btn-block btn clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              삭제하기
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
