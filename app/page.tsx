"use client";

import styles from "./page.module.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";

interface student_dto {
  id: string;
  name: string;
}

type students_dto = Array<student_dto>;

function factorialOf(n: students_dto | null) {
  return n;
}

export default function Home() {
  const [students, setStudents] = useState<students_dto | null>(null);
  const memorizedCard: students_dto | null = useMemo(
    () => factorialOf(students),
    [students]
  );

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/api/studentsList");
      const data = await response.json();
      setStudents(data);
    }
    fetchUsers();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>

      <div className={styles.center}>
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="palavra chave"
            inputProps={{ "aria-label": "palavra chave" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      {memorizedCard &&
        memorizedCard.map((item: student_dto) => (
          <div className={styles.grid} key={item.id}>
            {item.name}
          </div>
        ))}
    </main>
  );
}
