'use client' // only in App Router

import React, { useState } from 'react';
import {
    FormControl, InputLabel, Select, MenuItem, TextField, Button, Box, Typography
} from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';

const FilterComponent = () => {
    // State for each filter option
    const [phase, setPhase] = useState('');
    const [material, setMaterial] = useState('');
    const [unit, setUnit] = useState('');
    const [lesson, setLesson] = useState('');
    const [dateRegister, setDateRegister] = useState(null);
    const [year, setYear] = useState('');
    const [user, setUser] = useState('');

    // Dummy data for options
    const phases = ['Phase 1', 'Phase 2', 'Phase 3'];
    const materials = ['Math', 'Science', 'History'];
    const units = ['Unit 1', 'Unit 2', 'Unit 3'];
    const lessons = ['Lesson 1', 'Lesson 2', 'Lesson 3'];
    const years = [2023, 2024, 2025];
    const users = ['User A', 'User B', 'User C'];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
            <Typography variant="h6">Filter Options</Typography>

            {/* Phase Filter */}
            <FormControl fullWidth>
                <InputLabel>Phase</InputLabel>
                <Select value={phase} onChange={(e) => setPhase(e.target.value)}>
                    {phases.map((p, index) => (
                        <MenuItem key={index} value={p}>{p}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Material Filter */}
            <FormControl fullWidth>
                <InputLabel>Material</InputLabel>
                <Select value={material} onChange={(e) => setMaterial(e.target.value)}>
                    {materials.map((m, index) => (
                        <MenuItem key={index} value={m}>{m}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Unit Filter */}
            <FormControl fullWidth>
                <InputLabel>Unit</InputLabel>
                <Select value={unit} onChange={(e) => setUnit(e.target.value)}>
                    {units.map((u, index) => (
                        <MenuItem key={index} value={u}>{u}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Lesson Filter */}
            <FormControl fullWidth>
                <InputLabel>Lesson</InputLabel>
                <Select value={lesson} onChange={(e) => setLesson(e.target.value)}>
                    {lessons.map((l, index) => (
                        <MenuItem key={index} value={l}>{l}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Date of Registration Filter */}
            {/* <DatePicker
                label="Date of Registration"
                value={dateRegister}
                onChange={(newValue) => setDateRegister(newValue)}
                renderInput={(params) => <TextField fullWidth {...params} />}
            /> */}

            {/* Year Filter */}
            <FormControl fullWidth>
                <InputLabel>Year</InputLabel>
                <Select value={year} onChange={(e) => setYear(e.target.value)}>
                    {years.map((y, index) => (
                        <MenuItem key={index} value={y}>{y}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* User Filter */}
            <FormControl fullWidth>
                <InputLabel>User</InputLabel>
                <Select value={user} onChange={(e) => setUser(e.target.value)}>
                    {users.map((u, index) => (
                        <MenuItem key={index} value={u}>{u}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Filter Button */}
            <Button variant="contained" color="primary" onClick={() => console.log('Apply Filters')}>
                Apply Filters
            </Button>
        </Box>
    );
};

export default FilterComponent;
