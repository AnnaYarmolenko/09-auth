'use client'

import { useState } from 'react';
import { updateMe } from '@/lib/api/clientApi';
import Image from 'next/image';
import css from './EditProfilePage.module.css'
import { useRouter } from 'next/navigation'
import {type User} from '@/types/user';
import { useAuthStore } from '@/lib/store/authStore';

export default function EditProfile ({user}: {user: User}) {
  const router = useRouter();
  const { setUser } = useAuthStore();
  const [userName, setUserName] = useState(user.username);
  const [avatar] = useState(user.avatar);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

   const handleSaveUser = async (formData: FormData) => {
    const newUsername = formData.get('username') as string;
    const updatedUser = await updateMe({ username: newUsername });
    setUser(updatedUser); 
    router.push('/profile');
  };

  const handleCancel = () => {
    router.push('/profile');
  };

  return (
    <div>
      <h1 className ={css.formTitle}>Edit profile</h1>
      <form action={handleSaveUser} className={css.profileCard}>
        <Image
            src={avatar}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        <input type='text' name='username' value={userName} onChange={handleChange} />
        <br />
        <button type='submit' className={css.saveButton}>Save user</button>
        <button type="button" onClick={handleCancel} className={css.cancelButton}>Cancel</button>
      </form>
    </div>
  )
}
