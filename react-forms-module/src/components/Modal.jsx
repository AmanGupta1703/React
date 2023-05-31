/* eslint-disable */
import "./Modal.css";
import { createPortal } from "react-dom";
export default function Modal({ children, isSalesModal }) {
	return createPortal(
		<div className="modal-backdrop">
			<div
				className="modal"
				style={{
					border: "4px solid",
					borderColor: isSalesModal ? "#ff4500" : "#555",
					textAlign: "center",
				}}
			>
				{children}
			</div>
		</div>,
		document.body
	); // puts it at the end of the body
}
