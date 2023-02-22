"use client";

import styles from "./page.module.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";

interface fieldDto {
  id: string;
  description: string;
  created: string;
}

export default function Home() {
  const [keyFinder, setKeyFinder] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [skills, setSkills] = useState<Array<fieldDto>>();

  async function fetching(keyFinder: string) {
    const response = await fetch("/api/skills", {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        description: keyFinder,
      }),
    });
    const data: Array<fieldDto> = await response.json();

    setSkills(data);
  }

  useEffect(() => {
    if (isFetching && keyFinder !== "") {
      fetching(keyFinder);
      setIsFetching(false);
    }
    if (!keyFinder) {
      setSkills(undefined);
    }
  }, [isFetching, keyFinder]);

  return (
    <main className={styles.main}>
      <div className={(styles.description, styles.scroller)}>
        {skills &&
          skills.map((item: fieldDto) => (
            <div className={styles.card} key={item.id}>
              <span className={styles.truncate}>
                {item.id} - {item.description}
              </span>
            </div>
          ))}
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
            value={keyFinder}
            onChange={(e: any) => {
              setIsFetching(true);
              setKeyFinder(e.target.value);
            }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </main>
  );
}
