import React from 'react';
import { ResponsiveParallelCoordinates } from '@nivo/parallel-coordinates'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveParallelCoordinates = ({ data }) => (
    <ResponsiveParallelCoordinates
        data={data}
        variables={[
            {
                key: 'temp',
                type: 'linear',
                min: 'auto',
                max: 'auto',
                ticksPosition: 'before',
                legend: 'temperature',
                legendPosition: 'start',
                legendOffset: 20
            },
            {
                key: 'cost',
                type: 'linear',
                min: 'auto',
                max: 'auto',
                ticksPosition: 'before',
                legend: 'cost',
                legendPosition: 'start',
                legendOffset: 20
            },
            {
                key: 'color',
                type: 'point',
                padding: 1,
                min: 'auto',
                max: 'auto',
                // values: [
                //     'red',
                //     'yellow',
                //     'green'
                // ],
                legend: 'color',
                legendPosition: 'start',
                legendOffset: -20
            },
            {
                key: 'target',
                type: 'point',
                padding: 0,
                min: 'auto',
                max: 'auto',

                // values: [
                //     'A',
                //     'B',
                //     'C',
                //     'D',
                //     'E'
                // ],
                legend: 'target',
                legendPosition: 'start',
                legendOffset: -20
            },
            {
                key: 'volume',
                type: 'linear',
                min: 'auto',
                max: 'auto',
                legend: 'volume',
                legendPosition: 'start',
                legendOffset: -20
            }
        ]}
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
    />
)

export default MyResponsiveParallelCoordinates