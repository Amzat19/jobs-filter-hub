import PropType from 'prop-types';

const Jobs = ({ filtersArray, addToFilter, data }) => {
  const filterFunction = (job) => {
    if (!filtersArray.length) {
      return true;
    }

    const tags = [job.role, job.level, ...job.languages, ...job.tools];

    return filtersArray.every((filter) => tags.includes(filter));
  };

  const filteredJobs = data.filter(filterFunction);

  return (
    <section>
      {filteredJobs &&
        filteredJobs.map((job) => {
          const showFilterTab = (filter) => {
            if (!filtersArray.includes(filter)) addToFilter(filter);
          };

          return (
            <article
              key={job.id}
              className={`relative h-64 w-4/5 m-auto mt-12 first:mt-24 bg-white ${
                job.featured ? `border-l-4 border-dDarkCyan` : ``
              }  rounded-md shadow-lg md:flex md:items-center md:justify-between md:h-36`}
            >
              <div className="ml-6 w-4/5 pt-10 pb-3 border-b border-dDarkCyan md:flex md:gap-4 md:items-center md:w-1/2 md:border-none md:pb-5">
                <figure className="absolute bottom-56 left-4 md:static">
                  <img
                    src={require(`../images/${job.logo}`)}
                    alt="Company Logo"
                    className="w-14 h-14"
                  />
                </figure>
                <div>
                  <div className="flex gap-2 items-end mb-2">
                    <p className="text-base font-medium text-dDarkCyan">
                      {job.company}
                    </p>
                    <div className="flex gap-2 items-end">
                      <p
                        className={
                          job.new
                            ? 'uppercase bg-dDarkCyan text-white h-6 w-14 rounded-xl pt-1 pl-3 text-sm'
                            : ''
                        }
                      >
                        {job.new ? 'New!' : ''}
                      </p>
                      <p
                        className={
                          job.featured
                            ? 'uppercase bg-vDarkcyan text-white w-24 rounded-2xl pt-1 px-3'
                            : ''
                        }
                      >
                        {job.featured ? 'Featured' : ''}
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="font-bold text-base tracking-normal hover:text-dDarkCyan">
                      {job.position}
                    </p>
                  </div>
                  <div>
                    <ul className="flex gap-6 text-cyanDark">
                      <li className="">{job.postedAt}</li>
                      <li className="list-disc">{job.contract}</li>
                      <li className="list-disc">{job.location}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mx-4 my-3">
                <button
                  type="button"
                  className="button"
                  onClick={() => showFilterTab(job.role)}
                >
                  {job.role}
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={() => showFilterTab(job.level)}
                >
                  {job.level}
                </button>
                {job.languages &&
                  job.languages.map((language, index) => (
                    <button
                      type="button"
                      className="button"
                      key={index}
                      onClick={() => showFilterTab(language)}
                    >
                      {language}
                    </button>
                  ))}
                {job.tools &&
                  job.tools.map((tool, index) => (
                    <button
                      type="button"
                      className="button"
                      key={index}
                      onClick={() => showFilterTab(tool)}
                    >
                      {tool}
                    </button>
                  ))}
              </div>
            </article>
          );
        })}
    </section>
  );
};

Jobs.propTypes = {
  filtersArray: PropType.array.isRequired,
  data: PropType.array.isRequired,
  addToFilter: PropType.func.isRequired,
};

export default Jobs;
