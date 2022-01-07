import { Snowflake } from 'discord-api-types/v9';
import { DiscordConstants } from '../constants/DiscordConstants';

/**
 * Utilities for Discord snowflakes.
 * @see [Discord API Reference](https://discord.com/developers/docs/reference#snowflakes)
 */
export class SnowflakeUtils {
    /**
     * For every ID that is generated on a process, this property of the snowflake is incremented.
     */
    static increment (snowflake: Snowflake): number {
        return Number(BigInt(snowflake) & 0xFFFn);
    }

    /**
     * Internal Discord process ID the snowflake was created on.
     */
    static processId (snowflake: Snowflake): number {
        return Number((BigInt(snowflake) & 0x1F000n) >> 12n);
    }

    /**
     * The time at which the snowflake was created as a unix millisecond timestamp.
     */
    static time (snowflake: Snowflake): number {
        return Number((BigInt(snowflake) >> 22n) + BigInt(DiscordConstants.DISCORD_EPOCH));
    }

    /**
     * Internal Discord worker ID the snowflake was created on.
     */
    static workerId (snowflake: Snowflake): number {
        return Number((BigInt(snowflake) & 0x3E0000n) >> 17n);
    }
}