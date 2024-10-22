import sql from '$lib/server/database';

export async function load() {
    const rows = await sql`
    SELECT
        containerNumber,
        nameOfShip,
        containerSize,
        dateContainerShipped
    FROM
        containers`;

    // Log the data to verify on the server side
    console.log({ rows });

    // Ensure correct return format
    return { containers: rows };
}