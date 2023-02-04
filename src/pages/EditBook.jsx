import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dataPlace } from "../Context";

import EditForm from "../components/EditForm";

function EditBook() {
  const params = useParams();
  const { getSingleData, singleBookData, setSingleBookData } =
    useContext(dataPlace);

  useEffect(() => {
    setSingleBookData(null);
    getSingleData(params.id);
  }, []);

  return (
    <div>
      {singleBookData ? (
        <EditForm />
      ) : (
        <h2 className="h-screen bg-slate-900 text-center text-white pt-32">
          Loading...
        </h2>
      )}
    </div>
  );
}

export default EditBook;
