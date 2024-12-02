


export default function HomeCollaborating() {
  return (
    <>
      <div className="relative flex flex-col border border-[#50B498] h-[400px] bg-[#BDBDBD] rounded-[5px] mt-[5.875em]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,27,43,0.8)] to-[rgba(26,27,43,0)]"></div>

        {/* Content */}
        <div className="relative flex items-center gap-[0.625em] p-4">
          <img
            src="/home-collaborating-image.svg"
            alt="Collaborating"
            width={40}
            height={0}
          />
          <p className="text-white font-roboto-condensed text-[0.875em] font-bold uppercase">
                        collaborating
          </p>
        </div>
      </div>
    </>
  );
}
