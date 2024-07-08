import { useRecoilState } from 'recoil'
import { hamburgerStatus } from '../recoil/HamburgerStatus.tsx'

const Hamburger = () => {
	const [open, setOpen] = useRecoilState(hamburgerStatus)
	const menuBar = () => {
		setOpen(!open)
	}
	return (
		<div onClick={menuBar} className="hidden max-md:flex flex-col gap-1 duration-150 cursor-pointer">
			<span className={`bg-white h-0.5 w-5 duration-150 ${open ? "rotate-45 translate-y-1" : ""}`}></span>
			<span className={`bg-white h-0.5 w-5 duration-150 ${open ? "opacity-0 translate-x-10" : ""}`}></span>
			<span className={`bg-white h-0.5 w-5 duration-150 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
		</div>
	)
}

export default Hamburger;
