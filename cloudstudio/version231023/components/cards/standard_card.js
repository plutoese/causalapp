export default function CaseCard({ type, date, title, abstract, author }) {
    const article_bg = `relative p-6 ${
      type === 0 ? "bg-provence-mist" : "bg-provence-limonade"
    } rounded-lg border border-gray-200 shadow-md`;
  
    return (
      <article className={article_bg}>
        <div className="flex justify-between items-center mb-5 text-provence-lavender">
          <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
            <svg
              className="mr-1 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            {type === 0 ? "常规案例" : "交互案例"}
          </span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h2 className="mb-2 text-xl font-bold tracking-tight text-provence-indigo">
          <a href="#">{title}</a>
        </h2>
        <p className="mb-5 pb-7 font-light text-sm text-gray-500 dark:text-gray-400">
          {abstract}
        </p>
        <div className="w-full flex justify-between items-center">
          <div className="absolute bottom-5 left-8 flex items-center space-x-2">
            <img
              className="w-7 h-7 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="Jese Leos avatar"
            />
            <span className="font-medium text-sm text-provence-indigo">
              {author}
            </span>
          </div>
          <div className="absolute bottom-6 right-8 flex items-center space-x-2">
            <a
              href="#"
              className="inline-flex items-center font-medium text-sm text-provence-indigo hover:underline"
            >
              点击进入
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </article>
    );
  }
  