import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FaUserSlash } from "react-icons/fa";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";

const BlockedUser = ({ id, name, updateBlockedUser }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
        flex-1
        bg-red-600
        hover:bg-red-700
        cursor-pointer
        text-white
        py-2
        rounded-lg
        font-medium
        transition
        "
      >
        Block
      </button>

      {open &&
        ReactDOM.createPortal(
          <Blocked
            onClose={onClose}
            id={id}
            name={name}
            updateBlockedUser={updateBlockedUser}
          />,
          document.body
        )}
    </>
  );
};

const Blocked = ({
  onClose,
  id,
  name,
  updateBlockedUser,
}) => {
  const [loading, setLoading] = useState(false);

  const blockedhandle = async () => {
    try {
      setLoading(true);

      const url = import.meta.env.VITE_SERVER_URL;

      const res = await fetch(
        `${url}/admin/block/user/${id}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (!data.success) {
        toast.info(data.message);
        return;
      }

      toast.success(data.message);

      updateBlockedUser(id);

      onClose();

    } catch (error) {

      toast.error("Server not responding");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div
      className="
      fixed
      inset-0
      z-[99999]
      bg-black/80
      backdrop-blur-md
      flex
      items-center
      justify-center
      px-4
      "
    >
      <div
        className="
        w-full
        max-w-sm
        sm:max-w-md
        bg-white
        dark:bg-gradient-to-br
        dark:from-slate-900
        dark:via-slate-800
        dark:to-slate-900
        border
        border-slate-700
        rounded-2xl
        shadow-2xl
        p-5
        flex
        flex-col
        gap-4
        "
      >

        <div className="flex justify-center">

          <div
            className="
            h-16
            w-16
            rounded-full
            dark:bg-red-500/20
            bg-red-400
            flex
            items-center
            justify-center
            "
          >

            <FaUserSlash className="text-3xl dark:text-red-500 text-red-600" />

          </div>

        </div>

        <h1
          className="
          text-center
          text-lg
          font-bold
          dark:text-white
          text-black
          "
        >
          Block User Account
        </h1>

        <div className="w-full h-[1px] bg-slate-700"></div>

        <p
          className="
          text-center
          text-sm
          dark:text-slate-300
          text-black
          leading-6
          "
        >
          Are you sure you want to block
          <span className="text-red-500 font-semibold">
            {" "}
            {name}
          </span>
          ?
          <br />
          This user will temporarily lose access.
        </p>

        <div
          className="
          flex
          flex-col
          sm:flex-row
          gap-3
          mt-2
          "
        >
          <button
            onClick={onClose}
            className="
            w-full
            sm:w-1/2
            border
            border-slate-600
            dark:text-slate-300
            text-black
            py-2
            rounded-lg
            hover:bg-slate-700
            
            transition
            cursor-pointer
            "
          >
            Cancel
          </button>

          <button
            onClick={blockedhandle}
            disabled={loading}
            className="
            w-full
            sm:w-1/2
            bg-red-600
            hover:bg-red-700
            text-white
            py-2
            rounded-lg
            shadow-lg
            active:scale-95
            transition
            cursor-pointer
            "
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <span>Please Wait</span>

                <TailSpin
                  visible={true}
                  height="18"
                  width="18"
                  color="#60A5FA"
                />
              </div>
            ) : (
              "Block User"
            )}
          </button>

        </div>

      </div>
    </div>
  );
};

export default BlockedUser;