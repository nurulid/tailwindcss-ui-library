import React from 'react';

export const Elephant = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 64 64"
    >
      <path
        fill="currentColor"
        d="M61.339 45.458c.082-4.336-1.342-8.522-2.133-10.505c-.715-7.881-5.752-13.836-12.12-14.079c-1.868-6.206-6.999-9.774-14.525-9.774c-.876 0-1.875.097-2.977.289C27.93 10.42 26.407 10 24.614 10c-1.894 0-4.093.493-6.811 1.232c-6.065 1.65-10.617 12.115-12.804 17.145c-.186.426-.349.801-.489 1.114c-3.259 6.232-2.754 11.276-1.753 14.411c1.447 4.538 4.572 7.482 7.013 8.725c1.667.849 3.588 1.298 5.553 1.298c4.04 0 7.51-1.863 9.286-4.984c.525-.924.625-1.78.297-2.547c-.494-1.149-1.638-1.436-2.395-1.625c-.386-.098-.785-.197-1.072-.365c-.288-.168-.576-.471-.854-.763c-.521-.549-1.236-1.301-2.344-1.302h-.001c-.618 0-1.483.241-2.199 1.348c-.259-.026-.623-.152-.909-.32c-.878-.514-1.517-1.451-1.753-2.572c-.203-.966-.129-2.074.212-3.285a2.867 2.867 0 0 0 1.018.127c1.053.792 3.243 2.438 6.523 2.438c1.317 0 2.68-.271 4.066-.8l.008.011V62h13.648V51.724l.972.15c.605.096 1.195.188 1.777.277V62h16.41V44.208c.658-1.775 1.064-3.707 1.216-5.669c.586 2.075 1.093 4.7.978 7.381c-.658 1.08-1.139 2.103-1.371 2.974c-.027 1.123.326 2.473.994 3.801c1.074-1.523 1.851-3.004 2.17-4.196c.02-.91-.218-1.968-.661-3.041m-46.392-9.781a.124.124 0 0 0-.052.011a1.137 1.137 0 0 1-.444.096c-.767 0-1.297-.864-.757-1.45c.74-.803.618-1.451.026-1.974c-.072.38-.197.757-.4 1.114c-1.616 2.842-2.225 5.504-1.763 7.702c.344 1.633 1.304 3.015 2.634 3.793c.532.312 1.273.581 1.946.581c.569 0 1.089-.194 1.388-.722c.259-.454.488-.632.715-.632c.587 0 1.17 1.173 2.257 1.81c1.51.882 3.416.394 2.492 2.018c-1.57 2.76-4.618 4.044-7.667 4.044c-1.646 0-3.293-.375-4.707-1.094C6.481 48.869.509 41.103 6.186 30.302c1.615-3.595 6.38-15.719 12.106-17.277c2.773-.755 4.715-1.167 6.321-1.167c1.714 0 3.048.468 4.603 1.491c1.126-.229 2.288-.392 3.345-.392c7.432 0 13.458 3.824 13.458 13.597s-6.025 13.597-13.458 13.597c-3.293 0-5.402-1.2-6.734-3.186c-1.799.916-3.359 1.252-4.695 1.252c-3.675 0-5.647-2.54-6.185-2.54m41.265 8.033l-.061.159v16.273h-1.133c-.079-1.136-.711-2.024-1.487-2.024s-1.405.889-1.483 2.024h-.031c-.078-1.136-.71-2.024-1.486-2.024s-1.406.889-1.484 2.024h-.031c-.078-1.136-.71-2.024-1.487-2.024c-.201 0-.392.063-.567.17v-7.291l-.828-.092c-1.712-.188-3.803-.517-6.016-.865l-3.125-.485v10.588H35.86c-.078-1.136-.71-2.024-1.486-2.024c-.775 0-1.407.889-1.485 2.024h-.03c-.078-1.136-.709-2.024-1.486-2.024c-.776 0-1.405.889-1.483 2.024h-.031c-.078-1.136-.71-2.024-1.488-2.024c-.16 0-.313.049-.459.119v-16.42c1.396.797 3.357 1.418 6.124 1.418c8.623 0 15.029-5.18 15.029-15.195a13.5 13.5 0 0 0-1.023-5.216c5.367.854 9.4 6.715 9.4 14.058c-.004 2.359-.427 4.72-1.23 6.827"
      />
      <path
        fill="currentColor"
        d="M17.126 23.484a3.232 3.232 0 0 0-2.35 4.06c.299 1.033 1.059 1.816 1.993 2.22a7.634 7.634 0 0 1 2.492-1.916a7.87 7.87 0 0 1 2.198-.701c.04-.403.013-.823-.108-1.242c-.517-1.789-2.41-2.874-4.225-2.421m16.453 14.057c6.465 0 10.172-3.999 10.172-10.969c0-6.971-3.707-10.968-10.172-10.968c-1.39 0-2.411.356-3.12 1.089c-1.348 1.392-1.262 3.793-1.154 6.833c.031.875.064 1.806.064 2.776c0 1.585-.39 3.15-.732 4.53c-.523 2.103-.975 3.918.049 5.223c.795 1.013 2.35 1.486 4.893 1.486m-3.586-6.373c.362-1.458.773-3.11.773-4.866c0-.987-.034-1.934-.065-2.825c-.096-2.71-.172-4.851.763-5.817c.434-.447 1.125-.665 2.116-.665c3.277 0 8.775 1.244 8.775 9.576s-5.498 9.576-8.775 9.576c-2.022 0-3.298-.32-3.793-.951c-.605-.769-.23-2.28.206-4.028"
      />
    </svg>
  );
};
