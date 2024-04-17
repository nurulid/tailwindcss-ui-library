import React from 'react';
import { Star, Mail, File, Send } from 'lucide-react';

const folderMenus = [
  {
    icon: Mail,
    title: 'Inbox',
    count: '1293',
    unread: '3',
    active: true,
  },
  {
    icon: Send,
    title: 'Send',
    count: '145',
    unread: '',
    active: false,
  },
  {
    icon: Star,
    title: 'Starred',
    count: '67',
    unread: '',
    active: false,
  },
  {
    icon: File,
    title: 'Draft',
    count: '5',
    unread: '',
    active: false,
  },
];

export const htmlNav = `<nav class="max-w-[300px] w-full bg-white">
  <ul>
    <li data-active="true" class="group flex items-center gap-4 py-3 px-4 rounded transition-all data-[active=true]:bg-gray-100 hover:bg-gray-100">
      <i data-lucide="mail" class="p-2 bg-gray-100 rounded size-[33px] group-data-[active=true]:text-violet-400"></i>
      <h3 class="text-base">Inbox</h3>
      <div class="ml-auto text-xs">
        <span class="text-gray-500">+6</span>
        <span class="inline-block ml-2 p-2 bg-gray-100 rounded-full group-data-[active=true]:bg-violet-400 group-data-[active=true]:text-white">
          132
        </span>
      </div>
    </li>
    <li data-active="false" class="group flex items-center gap-4 py-3 px-4 rounded transition-all data-[active=true]:bg-gray-100 hover:bg-gray-100">
      <i data-lucide="send" class="p-2 bg-gray-100 rounded size-[33px] group-data-[active=true]:text-violet-400"></i>
      <h3 class="text-base">Send</h3>
      <div class="ml-auto text-xs">
        <span class="inline-block ml-2 p-2 bg-gray-100 rounded-full group-data-[active=true]:bg-violet-400 group-data-[active=true]:text-white">
          45
        </span>
      </div>
    </li>
    <li data-active="false" class="group flex items-center gap-4 py-3 px-4 rounded transition-all data-[active=true]:bg-gray-100 hover:bg-gray-100">
      <i data-lucide="star" class="p-2 bg-gray-100 rounded size-[33px] group-data-[active=true]:text-violet-400"></i>
      <h3 class="text-base">Starred</h3>
      <div class="ml-auto text-xs">
        <span class="inline-block ml-2 p-2 bg-gray-100 rounded-full group-data-[active=true]:bg-violet-400 group-data-[active=true]:text-white">
          45
        </span>
      </div>
    </li>
    <li data-active="false" class="group flex items-center gap-4 py-3 px-4 rounded transition-all data-[active=true]:bg-gray-100 hover:bg-gray-100">
      <i data-lucide="file" class="p-2 bg-gray-100 rounded size-[33px] group-data-[active=true]:text-violet-400"></i>
      <h3 class="text-base">Draft</h3>
      <div class="ml-auto text-xs">
        <span class="inline-block ml-2 p-2 bg-gray-100 rounded-full group-data-[active=true]:bg-violet-400 group-data-[active=true]:text-white">
          45
        </span>
      </div>
    </li>
  </ul>
</nav>`;

export const Navigation = () => {
  return (
    <>
      <nav className="max-w-[300px] w-full bg-white">
        <ul>
          {folderMenus.map(({ icon: Icon, title, count, unread, active }) => {
            return (
              <li
                key={title}
                data-active={active}
                className={[
                  'group flex items-center gap-4 py-3 px-4',
                  'data-[active=true]:bg-gray-100',
                  'hover:bg-gray-100 transition-all',
                ].join(' ')}
              >
                <Icon
                  size={33}
                  className={[
                    'p-2 rounded',
                    'bg-gray-100',
                    'group-data-[active=true]:text-violet-400'
                  ].join(' ')}
                />
                <h3 className="text-base">{title}</h3>
                <div className="ml-auto text-xs">
                  {unread ? (
                    <span className="text-gray-500">+{unread}</span>
                  ) : null}
                  <span
                    className={[
                      'inline-block ml-2 p-2 rounded-full',
                      'bg-gray-100',
                      'group-data-[active=true]:bg-violet-400 group-data-[active=true]:text-white',
                    ].join(' ')}
                  >
                    {count}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};