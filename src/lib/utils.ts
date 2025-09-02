import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

/**
 * Animates the given element in. The element should initially have the following classes:
 * - opacity-0
 * - -translate-x-5
 * After the animation, the element will have the following classes:
 * - opacity-100
 * - translate-x-0
 * @param node The element to animate in
 * @param {{delay?: number}} [options={}] Options to pass to the animation
 * @param {number} [options.delay=0] The delay in milliseconds before the animation starts
 */
export function animateIn(node: HTMLElement, { delay = 0 } = {}) {
	setTimeout(() => {
		node.classList.remove("opacity-0", "-translate-x-5");
		node.classList.add("opacity-100", "translate-x-0");
	}, delay);
}


/**
 * Attaches an event listener to the given node that calls history.back() when the node is clicked.
 * @param node The node to attach the event listener to
 * @returns An object with a single `destroy` method that can be used to remove the event listener
 */
export const BackLink = (node: HTMLButtonElement | HTMLAnchorElement) => {
	const onClick = () => {
		history.back();
	};
	node.addEventListener("click", onClick);
	return {
		destroy() {
			node.removeEventListener("click", onClick);
		}
	};
};

export const toggleTheme = (isdark: boolean) => {
	//check local storage
	localStorage.setItem("mode", isdark ? "dark" : "white");
	//toggle class on body
	document.body.classList.toggle('dark', isdark);
}