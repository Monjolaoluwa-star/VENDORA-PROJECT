import LogoImage from "../assets/Logo.png";

export default function Logo() {
  return (
    <img
      src={LogoImage}
      alt="Vendora Logo"
      style={{
        height: "45px",
        width: "auto",
        objectFit: "contain",
      }}
    />
  );
}