/* eslint-disable */
import "./Modal.css";
import { createPortal } from "react-dom";
export default function Modal({ children, handleClose }) {
	return createPortal(
		<div className="modal-backdrop">
			<div className="modal">
				{children}
				<button onClick={handleClose}>close</button>
			</div>
		</div>,
		document.body
	); // puts it at the end of the body
}
