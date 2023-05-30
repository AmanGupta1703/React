/* eslint-disable */
import "./Modal.css";
import { createPortal } from "react-dom";
export default function Modal({ children, handleClose }) {
	return createPortal(
		<div className="modal-backdrop">
			<div
				className="modal"
				style={{
					border: "4px solid",
					borderColor: "#ff4500",
					textAlign: "center",
				}}>
				{children}
				<button onClick={handleClose}>close</button>
			</div>
		</div>,
		document.body
	); // puts it at the end of the body
}
